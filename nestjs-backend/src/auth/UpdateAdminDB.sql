-- Admin


UPDATE PUBLIC.USER
SET ROLE = 'Authorized',
	DEPARTMENT = 'Administrator'
WHERE ID = 'b4dd7153-821c-41c7-a0c6-274d0add1d4d'

-- Staff

UPDATE public.user SET department='D1',role='Authorized' where id='48d1f3b3-e5d7-4f58-9863-8c617f7a97e5'