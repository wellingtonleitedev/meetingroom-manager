create database meetingrooms;

create table [User] 
(
	Id int primary key identity,
	[Name] varchar(200) not null,
	[Email] varchar(200) not null,
	[Password] varchar(200) not null
);

create table Room
(
	Id int primary key identity,
	[Name] varchar(200) unique not null,
);

create table RoomUser
(
	Id int primary key identity,
	Title varchar(200) not null,
	UserId int foreign key references [User] (Id) not null,
	RoomId int foreign key references Room (Id) not null,
	InitialPeriod DateTime not null,
	EndPeriod DateTime not null,
);