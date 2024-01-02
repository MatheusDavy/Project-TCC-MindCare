# Project-TCC-MindCare

The "Mind Care" project focuses on developing a responsive website to promote mental health self-care. The goal is to provide a user-friendly platform that empowers individuals to prioritize and nurture their mental well-being. Through features such as educational content, guided meditation sessions, and tools for tracking mental health, Mind Care aims to contribute to the destigmatization of mental health and create a supportive virtual environment. The project envisions a future where people feel empowered to enhance their mental health for a healthier and more resilient society.

# Run the Project

### Dependences
- Docker
- NodeJs: 20.1.1^

### Database
* To up out database, we need have Docker installed
<a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank">- MacOS:</a>
<a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank">- Windowns:</a>
<a href="https://docs.docker.com/desktop/install/linux-install/" target="_blank">- Linux:</a>

* In the root folder by terminal run the command in your terminar to up our database
```
docker compose up -d
```

### Backend
* Navigate in `backend` folder in the terminal
* In the terminal, run the following command to install the project dependences:
```
npm install --force
```
* After that, run the the following commands to create our database:
```
npx prisma generate
npx prisma db push
```
* Finally, run the command to start the project:
```
npm run dev
```

### Frontend
* Navigate in `frontend` folder in the terminal
* In the terminal run the command to install the project dependences 
```
npm install --force
```
* Finally, run the command to start the project:
```
npm run dev
```
