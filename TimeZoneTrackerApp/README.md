# Time Zone Tracker App

## Overview
The Time Zone Tracker App is a mobile application designed to help users manage and track different time zones. It allows users to display current times for selected time zones, add or remove time zones, search for time zones, and set notifications for specific time zones. The app supports offline mode, dark mode, localization, and time conversion.

## Features
- Time Zone Display
- Add/Remove Time Zones
- Search Time Zones
- Automatic Time Updates
- User Preferences
- Notifications
- Offline Mode
- Dark Mode
- Localization
- Time Conversion
- Widget Support

## Technology Stack
- **Frontend**: React Native
- **Backend**: Flask
- **Database**: SQLite
- **Libraries**: pytz, requests, Flask-RESTful, SQLAlchemy, babel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TimeZoneTrackerApp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TimeZoneTrackerApp
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the Flask application:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Start the React Native application:
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```

## Testing
To run the tests, navigate to the tests directory and execute the test files using your preferred test runner.

## Localization
Localization files are located in the `localization` directory. You can add or modify translations as needed.

## Database
The SQLite database schema and seed data are located in the `database` directory.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.