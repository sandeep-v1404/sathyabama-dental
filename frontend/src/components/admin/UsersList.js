import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable, MDBTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'
import { useColorMode } from "@chakra-ui/react"
import { HStack, Center, Box } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

const UsersList = ({ history }) => {
    const { colorMode, } = useColorMode()
    const alert = useAlert();
    const dispatch = useDispatch();

    let { loading, users } = useSelector(state => state.allUsers);
    let { isDeleted, error } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            history.push('/admin/users');
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Department',
                    field: 'department',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        users.forEach(user => {
            data.rows.push({
                name: user.username,
                email: user.email,
                role: user.role,
                department: user.department,
                actions:
                    <HStack>
                        <Center w="40px" h="40px" bg="blue.300" color="white">
                            <Link to={`/admin/user/${user.id}`}>
                                <EditIcon />
                            </Link>
                        </Center>
                        <Center w="40px" h="40px" bg="red.300" color="white">
                            <Box as="button" fontWeight="bold" fontSize="lg" onClick={() => deleteUserHandler(user.id)}>
                                <DeleteIcon />
                            </Box>
                        </Center>
                    </HStack>
            })
        })

        return data;
    }


    return (
        <Fragment>
            <MetaData title={'All Users'} />
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-12 col-md-10">
                        <Fragment>
                            <h1 className="my-5">All Users</h1>

                            {loading ? <Loader /> : (
                                <MDBTable responsive>

                                    <MDBDataTable
                                        theadTextWhite={colorMode === "dark"}
                                        tbodyTextWhite={colorMode === "dark"}
                                        data={setUsers()}
                                        className="px-3"
                                        bordered
                                        striped
                                    />
                                </MDBTable>
                            )}
                        </Fragment>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UsersList
