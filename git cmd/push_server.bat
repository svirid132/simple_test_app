@echo off

rem settings directory
set mydrive=D:
set mypath=/Project/Portfolio/Test
set pathToServer=E:/Project_gitServer/Test
cd %mydrive%
cd %mypath%

git add .
set /p Message="Message: "
git commit -m "%Message%"
git push %pathToServer% master 
pause