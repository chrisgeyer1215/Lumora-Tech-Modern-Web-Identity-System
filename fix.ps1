# Rewrite-Git-Authors-Multiple-Emails.ps1
# Use only for commits that were actually yours but used old/wrong Git emails.

# Old/wrong emails to replace
$OldEmails = @(
    "chrisgeyer1215.dev@outlook.com"
)

# Correct Git identity
$CorrectName  = "Christopher Geyer"
$CorrectEmail = "chrisgeyer1215.dev@outlook.com"

# Backup current HEAD before rewriting history
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupBranch = "backup-before-author-rewrite-$timestamp"

git branch $backupBranch

if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create backup branch."
    exit 1
}

function ConvertTo-ShellSingleQuoted {
    param([string]$Value)

    return "'" + ($Value -replace "'", "'\''") + "'"
}

$escapedCorrectName  = ConvertTo-ShellSingleQuoted $CorrectName
$escapedCorrectEmail = ConvertTo-ShellSingleQuoted $CorrectEmail

$escapedOldEmails = ($OldEmails | ForEach-Object {
    ConvertTo-ShellSingleQuoted $_
}) -join " "

Write-Host "Backup branch created: $backupBranch"
Write-Host "Rewriting Git history..."
Write-Host "Replacing these old emails:"
$OldEmails | ForEach-Object { Write-Host " - $_" }
Write-Host ""
Write-Host "New identity:"
Write-Host "$CorrectName <$CorrectEmail>"
Write-Host ""

$confirm = Read-Host "Type YES to continue"

if ($confirm -ne "YES") {
    Write-Host "Cancelled. No history was rewritten."
    exit 0
}

$envFilter = @"
CORRECT_NAME=$escapedCorrectName
CORRECT_EMAIL=$escapedCorrectEmail

for OLD_EMAIL in $escapedOldEmails; do

    if [ "`$GIT_AUTHOR_EMAIL" = "`$OLD_EMAIL" ]; then
        export GIT_AUTHOR_NAME="`$CORRECT_NAME"
        export GIT_AUTHOR_EMAIL="`$CORRECT_EMAIL"
    fi

    if [ "`$GIT_COMMITTER_EMAIL" = "`$OLD_EMAIL" ]; then
        export GIT_COMMITTER_NAME="`$CORRECT_NAME"
        export GIT_COMMITTER_EMAIL="`$CORRECT_EMAIL"
    fi

done
"@

git filter-branch -f --env-filter $envFilter --tag-name-filter cat -- --branches --tags

if ($LASTEXITCODE -ne 0) {
    Write-Error "History rewrite failed. Your backup branch is: $backupBranch"
    exit 1
}

# Update local Git identity for future commits
git config user.name "$CorrectName"
git config user.email "$CorrectEmail"

Write-Host ""
Write-Host "Done. New local Git identity set:"
git config user.name
git config user.email

Write-Host ""
Write-Host "Backup branch:"
Write-Host $backupBranch
