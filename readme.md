# Sathyabama Dental Project

> A Web App Made for Sathyabama Dental Hospital using NestJS, PostgreSQL,TypeORM, React(Redux),Formik

### Install Dependencies (Frontend)

```
cd frontend
npm i
```

### Install Dependencies (Backend)

```
npm i
```

### Frontend in LocalHost

```
cd frontend
npm start
```

### Backend in LocalHost

```
cd backend
npm run dev
```

### Set Roles in Database

```

-- Admin


UPDATE PUBLIC.USER
SET ROLE = 'Authorized',
	DEPARTMENT = 'Administrator'
WHERE ID = 'b4dd7153-821c-41c7-a0c6-274d0add1d4d'

-- Staff

UPDATE public.user SET department='D1',role='Authorized' where id='48d1f3b3-e5d7-4f58-9863-8c617f7a97e5'

```

### Delete User in DB

```
DELETE FROM public."user"
WHERE role='Unauthorized';

```
