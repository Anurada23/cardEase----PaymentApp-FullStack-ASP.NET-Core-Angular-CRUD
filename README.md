# CardEase - PaymentApp-FullStack-ASP.NET-Core-Angular-CRUD

-Project Overview

A comprehensive full-stack application combining ASP.NET Core Web API (back-end) and Angular 16 (front-end), developed to handle end-to-end CRUD operations for payment details. Built with .NET 7, Entity Framework Core, SQL Server, and styled using Bootstrap and Toastr notifications.


-Functionality & Architecture
Backend (ASP.NET Core Web API)

API project based on .NET 7
Model: PaymentDetail with fields such as ID, card owner name, card number, expiration date, and security code
Configured EF Core DbContext and migrations targeting SQL Server
CRUD endpoints implemented: GET, POST, PUT, DELETE
Dependency injection used for DbContext management
Swagger UI enabled for API testing and documentation


-Frontend (Angular 16 Application)

Angular app initialized with Angular CLI (ng new payment-app)
Structured with service and component architecture: services handle API HTTP calls; components manage list and form UI
Form-driven data entry (create/update), list rendering, filtering, reset behavior
Two‑way data binding using ngModel, with built-in validation for required fields and length constraints
ngx-toastr used for success notifications, setup done via module and style configuration in angular.json and app.module.ts
CORS Handling to enable API access from Angular front‑end


-Tech Stack

Back-end: ASP.NET Core Web API (C#) targeting .NET 7
ORM: Entity Framework Core with SQL Server
Front-end: Angular 16, TypeScript
Styling: Bootstrap CSS, Font Awesome icons, ngx‑toastr for notifications
Development Tools: Visual Studio (API), VS Code (Angular)


-Setup Guide (High-Level)

Clone the repository
For API: restore NuGet packages → add migrations → update-database to initialize SQL database
For front-end: run npm install → ng serve to start Angular app
Access the API via Swagger and the UI via Angular's local server


-Key Features

Fully functional CRUD operations for payment records
Form validation (field requirements, max length checks)
Toast notifications on successful create/update/delete actions
Seamless client–server interaction via REST API
Responsive UI using Bootstrap layout
Proper handling of Pascal‑to‑camel casing conversion between C# and JavaScript model conventions


-Future Enhancements

Add user authentication and role-based API authorization
Integrate pagination or advanced filtering on records
Expand to support multiple entities or relational data
Add unit/integration testing (xUnit, Jasmine/Karma)
Containerize backend and frontend using Docker; deploy to Azure or other cloud platforms
