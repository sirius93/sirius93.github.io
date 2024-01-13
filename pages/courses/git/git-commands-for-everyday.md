# Commonly used git commands for everyday use

```
//Global
git config --global user.name "Nandan Kumar"

git config --global user.email "nandan.1345@gmail.com"

//Local
git config user.name "Nandan Kumar"

git config user.email "nandan.1345@gmail.com"

git config --list // show list of configs

git init // initialise a git repo

rm -rf .git

git remote add origin <server URL>


git branch -M main

git pull

git pull origin master // from a remote branch it performs a merge.

git add . // add all

git branch branch-name

//I prefer 

git checkout -b branch-name

git add . or git add filename.txt

git commit -m "add some changes, write cool message #forticketnumber"

git push -u origin branch-name

git push // if branch is already pushed

// create a merge conflict and show

git cherry-pick 2f5451f

git cherry-pick 2f5451f -n


// Rebase

master - own timeline

dev - own timeline

messy to track

merge does that.


rebase will be like adding your commit as master as base

all commit in the tree will start from last commit on master

git rebase master dev


// Undoing a few wrongdoings, that's what git is about

// Undoing Local Changes That Have Not Been Committed
git status // to see the changes
git checkout filename.txt // it will revert the file to previous commited state



// Undoing Your Last Commit (That Has Not Been Pushed)
git reset --soft HEAD~ or git reset --soft HEAD^

// undoing last two commits that has not been pushed

git reset --soft HEAD~2

// undoing a commit (Not pushed)

undo but keep changes : git reset 2f5451f

Undo and just let it go : git reset --hard 2f5451f


```
