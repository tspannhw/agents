# Cross Chx Code Test

## How to run

* make sure jre 1.8 is installed
* make sure no other processes are listening at localhost:8080
* copy zip into a command line
* switch to this directory in a command line
* unzip and run

		unzip NickCoats-CC.zip
		
		java -jar target/crosschx-0.0.1-SNAPSHOT.jar

* open browser to http://localhost:8080

## Technical Log

* used Eclipse for Java (maven support and code completion)
* used Atom for HTML/JS
* split UI and API into separate builds
* using maven, spring boot, angular, leafletjs
* built with Spring boot - from scratch, no initializer
* started with jhipster but ran into some errors so started with simple spring boot to learn

## What I learned

* Spring boot can be used a simple static file server
* Spring boot can run groovy (e.g. spring run app.groovy)
* jhipster seems extremely useful but generates A LOT of files
* spring-boot-starter-parent 1.3.1.RELEASE is used in most online examples but NOT actully in central maven repo
* a lot of popular yoeman generators are not compatible with the npm > v3.0
* to finally create a personal scaffold project for JS projects so I don't continually go through the pain of picking a specific toolchain
  * only possible now that I've tried a million yoeman generators and have seen popular patterns
