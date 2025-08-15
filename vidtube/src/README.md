# VidTube

A video streaming platform built with Node.js and Express.

## Features

- 🚀 Express.js server with CORS support
- 📁 Static file serving
- 🔐 JWT authentication ready
- ☁️ Cloudinary integration for media handling
- 🌐 Environment-based configuration
- 📦 ES6 modules support

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Cloudinary Account](https://cloudinary.com/) (for media storage)

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd vidtube/src
   ```

2. Install dependencies:
   ```bash
   npm install express cors dotenv
   ```

3. Set up environment variables:
   ```bash
   cp .env.sample .env
   ```

4. Edit the `.env` file with your actual configuration:
   - Update MongoDB connection string
   - Add your JWT secrets
   - Configure Cloudinary credentials

## Configuration

Update the `.env` file with your settings:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/vidtube
CORS_ORIGIN=http://localhost:3000

# JWT Secrets - Replace with your own secure secrets
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Running the Application

### Development Mode
```bash
npm run dev
# or
node index.js
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:8000` (or your configured PORT).

## Project Structure

```
src/
├── index.js          # Main entry point
├── app.js            # Express application setup
├── constance.js      # Configuration constants
├── .env              # Environment variables (not in git)
├── .env.sample       # Environment template
└── README.md         # This file
```

## API Endpoints

### Health Check
- **GET** `/` - Returns server status

Response:
```json
{
  "message": "VidTube API is running!",
  "status": "success"
}
```

## Development

### Adding New Routes
Add your routes in `app.js` or create separate route files and import them.

### Environment Variables
All environment variables are loaded in `constance.js`. Add new variables there and in the `.env` files.

## Security Notes

- Never commit your `.env` file to version control
- Use strong, unique secrets for JWT tokens
- Keep your Cloudinary credentials secure
- Implement proper input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Happy coding! 🎥✨**
