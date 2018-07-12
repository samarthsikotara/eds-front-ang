"use strict";

 angular.module('config', [])

.constant('ENV', {name:'development',tracking_service_url:'http://localhost:3000',business_master_service_url:'http://localhost:3000',authentication_service_url:'http://localhost:3000',task_lifecycle_url:'http://localhost:3000'})

;