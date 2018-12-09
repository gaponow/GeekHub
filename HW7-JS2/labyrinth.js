// Level 1
north()
north()

// Level 2
for (let a = 0; a <= 15; a++) {
	east(); }
	
// Level 3
for (a = 0; a < 7; a++) {
	south(); east(); }
	
// Level 4
for (a = 0; a < 10; a++) {
	south(); east(); }
	
//Level 5
while(isFree("east")) {
	east();} 
while(isFree("south")) {
	south();} 
while(isFree("west")) {
	west();} 
while(isFree("south")) {
	south();} 
while(isFree("west")) {
	west();} 
while(isFree("north")) {
	north();} 
while(isFree("west")) {
	west();} 
while(isFree("south")) {
	south();} 
while(isFree("east")) {
	east();}
	
// Level 6
while(isFree("south")) {
	south();} 
while(isFree("east")) {
	east();} 
while(isFree("north")) {
	north();} 
while(isFree("east")) {
	east();} 
while(isFree("north")) {
	north();} 
while(isFree("east")) {
	east();} 
while(isFree("south")) {
	south();} 
	north(); 
while(isFree("west")) {
	west();} 
while(isFree("south")) {
	south();} 
while(isFree("east")) {
	east();}
	
// Level 7
while (isFree("south")) {
	south();}
while (isFree("east")) {
	east();}
while (isFree("north")) {
	north();}
	east();
while (isFree("east")) {
	east();}
while (isFree("south")) {
	south();}
while (isFree("east")) {
	east();}
while (isFree("south")) {
	south();}
while (isFree("west")) {
	west();}
while (isFree("south")) {
	south();}
while (isFree("east")) {
	east();}
while (isFree("south")) {
	south();}
while (isFree("east")) {
	east();}