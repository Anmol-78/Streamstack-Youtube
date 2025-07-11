# StreamStack Repository🎥🐦

This repository houses the backend implementation for a StreamStack (YouTube-Twitter) hybrid platform. It provides functionalities like user authentication, video management, social interactions, and more.

## References

- [Data Modeling](https://documenter.getpostman.com/view/33297672/2sA2xmTVL8) - Link to Data Modeling Documentation
- [API Documentation](https://hari-4546075.postman.co/workspace/Hari's-Workspace~f698e61c-8e8d-47b2-8d07-fcb17213e0f2/collection/46480544-41e15bf5-e6ad-463c-a149-cf5386a269af?action=share&creator=46480544&active-environment=46480544-7457061d-71b0-4117-8118-59f724b61280) - Link to API Documentation

## Tech Stack

- Node.js
- Express.js
- MongoDB (MongoDB Aggregation Pipeline)
- Mongoose
- Cloudinary (for file storage)
- Multer (file upload middleware)

## Features

🔐 **Authentication**:
- Register
- Login
- Change Password
- Logout

👤 **User Management**:
- Get User by ID
- Update Account Details
- Update Avatar & Cover Image

👍📝 **Social Interactions**:
- Add Likes to Videos
- Comment on Videos & Tweets
- Tweet

📼 **Video Management**:
- Create, Update, Delete Video
- Get All Liked Videos of User
- Create Playlist
- Add & Remove Videos from Playlist
- Update Playlist

👥 **Subscription**:
- Subscribe & Unsubscribe Channel

📊 **Dashboard**:
- Channel Stats
- 
### Setup .env.local File

```js
PORT = 8000
MONGODB_URI = [Your MongoDB URI]
CORS_ORIGIN = *
ACCESS_TOKEN_SECRET = [Your Access Token Secret]
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_SECRET = [Your Refresh Token Secret]
REFRESH_TOKEN_EXPIRY = 10d
CLOUDINARY_NAME = [Your Cloudinary Name]
CLOUDINARY_API_KEY = [Your Cloudinary API Key]
CLOUDINARY_API_SECRET = [Your Cloudinary API Secret]
FRONTEND_URL = [your Frontend URL]
```
### env variable for the frontend folder
```js
VITE_BACKEND_BASE_URL = [your backend url]
```

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/StreamStack.git
    ```
2. Install dependencies:
    ```bash
    cd Frontend/ Backend
    npm install
    ```
3. Set up environment variables.
4. Run the project:
    ```bash
    npm run dev
    ```

Feel free to contribute to this project! 🚀

## Acknowledgments

This project was inspired by the functionalities of YouTube and Twitter. Special thanks to the open-source community for their valuable contributions.
