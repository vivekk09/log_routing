# log_routing
Open a terminal and navigate to the project directory.
Run the following command to start the Log Routing Service and the Database:
**docker-compose up**

Open another terminal and navigate to the project directory.
Run the following command to start the Testing Script:
**docker-compose run --rm test**

Now, you have the Log Routing Service running on http://localhost:3000/log, the PostgreSQL database running in a container, and the Testing Script firing requests to the Log Routing Service.
