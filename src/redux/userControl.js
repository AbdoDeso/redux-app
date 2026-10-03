import { createSlice } from "@reduxjs/toolkit";

const getUsers = localStorage.getItem("users")
const getSignin = localStorage.getItem("signin")
const getSignup = localStorage.getItem("signup")

const userControl = createSlice({
    name: "userControl",

    initialState: {
        users: getUsers ? JSON.parse(getUsers) : [],
        signinDone: getSignin,
        signupDone: getSignup,
        permitLog: "",
        log: null,
        formStat: 0,
        addFormStat: 0,
        updateFormStat: 0,
        item: null,
    },

    reducers: {
        updateLog : (state, action) => {
            state.log = action.payload;
        },
        addUser: (state, action) => {
            if (!state.users.some((i) => i.email === action.payload.email)) {
                const newUser = {
                    id: state.users.length + 1,
                    firstname: action.payload.firstName,
                    lastname: action.payload.lastName,
                    email: action.payload.email,
                    password: action.payload.password,
                    permit: "Denied",
                };
                state.users = [...state.users, newUser];
                state.signupDone = 1;
            } else {
                alert("User Already Exist !");
            }
        },

        resetStat: (state) => {
            state.signinDone = 0;
            state.signupDone = 0;
        },
        login: (state, action) => {
            const user = state.users.find(
                (i) => i.email === action.payload.email && i.password === action.payload.password
            );
            if (user) {
                if (user.email === "admin@admin.c") {
                    state.signinDone = 2;
                } else {
                    state.signinDone = 1;
                }
            } else {
                alert("Wrong Email or Password !");
            }
        },

        setAddFormStat: (state, action) => {
            state.addFormStat = action.payload;
        },
        setUpdateFormStat: (state, action) => {
            let user = state.users.find((item) => item.id === action.payload);
            state.updateFormStat = 1;
            state.item = user;
        },
        closeUpdateForm: (state) => {
            state.updateFormStat = 0;
        },
        closeAddForm: (state) => {
            state.addFormStat = 0;
        },
        adminAddUser: (state, action) => {
            const newUser = {
                id: state.users.length + 1,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                password: action.payload.password,
                permit: "Allowed",
            };
            state.users = [...state.users, newUser];
            state.addFormStat = 0;
        },
        UpdateUserForm: (state, action) => {
            const user = state.users.find((item) => item.id === state.log);
            const update = {
                id: state.log,
                firstname: action.payload.firstname === "" ? state.item.firstname : action.payload.firstname,
                lastname: action.payload.lastname === "" ? state.item.lastname : action.payload.lastname,
                email: action.payload.email === "" ? state.item.email : action.payload.email,
                password: action.payload.password === "" ? state.item.password : action.payload.password,
                permit: user.permit,
            };
            state.users = state.users.map((item) => (item.id === state.log ? update : item));
            state.updateFormStat = 0;
            
        },

        removeUser: (state, action) => {
            if (action.payload !== 0) {
                state.users = state.users.filter((item) => item.id !== action.payload);
            }
        },

        setPermit: (state, action) => {
            state.permitLog = action.payload;
            let user = state.users.find((item) => item.id === state.permitLog);
            if (user.permit !== "admin") {
                state.formStat = 1;
            }
        },
        allowUser: (state) => {
            let user = state.users.find((item) => item.id === state.permitLog);
            if (user.permit !== "admin") {
                user = { ...user, permit: "Allowed" };
                state.users = state.users.map((item) => (item.id === state.permitLog ? user : item));
            }
        },
        denyUser: (state) => {
            let user = state.users.find((item) => item.id === state.permitLog);
            if (user.permit !== "admin") {
                user = { ...user, permit: "Denied" };
                state.users = state.users.map((item) => (item.id === state.permitLog ? user : item));
            }
        },
        resetFormStat: (state) => {
            state.updateFormStat = 0;
            state.formStat = 0;
        },
    },
});

export const {
    addUser,
    UpdateUserForm,
    adminAddUser,
    resetStat,
    setAddFormStat,
    setUpdateFormStat,
    closeUpdateForm,
    resetFormStat,
    allowUser,
    denyUser,
    setPermit,
    login,
    removeUser,
    updateLog
} = userControl.actions;
export default userControl.reducer;