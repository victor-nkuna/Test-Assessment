# RESTful Booker API Test Collection

This Postman collection tests all endpoints of the RESTful Booker API ([https://restful-booker.herokuapp.com](https://restful-booker.herokuapp.com/apidoc/index.html)), including authentication, CRUD operations, and schema validation.

## 📥 Prerequisites
- [Postman](https://www.postman.com/downloads/) (Desktop App v10+ recommended)
- [Newman](https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/) (optional, for CLI runs)

## 🚀 Quick Start

### 1. Import Collection and Environment
1. Download these files:
   - Collection: [`restful-booker-collection.json`](path/to/your/collection)
   - Environment: [`restful-booker-env.json`](path/to/your/environment)
   
2. **Import into Postman**:
   - Open Postman → *File → Import → Upload Files*
   - Select both the collection and environment files

### 2. Set Up Environment Variables
The collection uses these environment variables:

| Variable       | Description                          | Example Value                     |
|----------------|--------------------------------------|-----------------------------------|
| `base_url`     | API base URL                         | `https://restful-booker.herokuapp.com` |
| `token`        | Authentication token (auto-generated)| (Populated by `/auth` test)       |
| `booking_id`   | Booking ID (auto-generated)          | (Populated by `POST /booking`)    |

**To activate the environment**:  
   - Top-right corner of Postman → Select `RESTful-Booker-Env` from the dropdown

![Postman Environment Selection](https://via.placeholder.com/400x200?text=Select+Environment+Here)

### 3. Run the Collection
#### Option A: Postman Runner
1. Open the collection → Click *Run collection*  
   ![Run Collection](https://via.placeholder.com/400x200?text=Click+Run+Collection)
2. Select the environment `RESTful-Booker-Env`
3. Click *Run RESTful Booker API Tests*

#### Option B: Newman (CLI)
```bash
npm install -g newman  # Install Newman globally
newman run restful-booker-collection.json -e restful-booker-env.json
