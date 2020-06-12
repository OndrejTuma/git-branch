# Git branch

Node.js script to list all branches 
and pick the ones to delete

## Motivation

Getting tired of manual removing of local git branches? 
I got the same problem and since I wanted to get to know 
`simple-git` and `inquirer` a bit, I created this simple 
node.js repo for selecting and deleting local git branches.

Enjoy 

## Techstack

* inquirer
* simple-git

## Install

1. run `yarn install` or `npm install`
1. you're ready to go

## Usage

### Delete braches

1. run `node index.js`
1. optional parameter is `path to working directory`
1. select branches to delete
1. confirm

### Checkout branch

1. run `node checkout.js`
1. optional parameter is `path to working directory`
1. select branch to checkout
