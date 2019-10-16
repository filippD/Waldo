# Where's Waldo? 

Website to play a commonly known game Where's Waldo.

Built from scratch as a part of Microverse Main Ciricculum with Ruby on Rails and Javascript. 

## Technology used

* Ruby in Rails
* Javascript

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
This project runs on Ruby, and Rails
After installation, run ruby -v to make sure Ruby installed correctly. Example:

```
$ ruby -v
ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-linux]
```
Also, make sure that Rails is installed by running rails -v. Example:

```
$ rails -v
Rails 5.2.3
```

### Installing
Run `bundler -v` and make sure your bundler version is 2.0.2 or greater, otherwise update bundler.  
Run `bundle install` to install all project dependencies.

### Configuring database
In order to set up the database run the following command:
```
rails db:create db:migrate
```
### To run the app

1. Clone this repo
2. Run `bundle install`
3. Run `rails s`
4. Open localhost:3000 on your browser

## Future features
  * More pictures to play with
  * Improved UI/UX for mobile and users
