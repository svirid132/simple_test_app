@echo off

rem settings directory
set mydrive=D:
set mypath=\Project\Portfolio\Test
set pathToServer=E:/Project_gitServer/Test
cd %mydrive%
cd %mypath%

git pull %pathToServer%
pause

