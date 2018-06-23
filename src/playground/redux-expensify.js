import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense=(id,update)=>({
    type: 'EDIT_EXPENSE',
    id,
    update
});

//SET_TEXT_FILTER
const setTextFilter=(text='')=>({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate=()=>({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate= (startDate)=>({
    type: 'SET_START_DATE',
    startDate

});

//SET_END_DATE
const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate

});

//Expenses reducer

const expensesReducerDefaultState=[];
//state.concat(action.expense)
const expensesReducer=(state=expensesReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense

        ];

        case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
            return id!== action.id;
        });

        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.update
                }
            }else{
                return expense
            }
        });

       

        default:
        return state;
    }

};

//Filter reducer

const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'Amount'
        };

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
        };
        
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };

        case 'SET_START_DATE':
        return {
            ...state,
            startDate:action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.endDate
        };
        default:
        return state;
    }
};

//Get Visible expenser

const getVisibleExpensers=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate!== 'number'||expense.createdAt >=startDate;
        const endDateMatch = typeof endDate!== 'number'||expense.createdAt <=startDate;;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch &&  endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    });
};

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters:filterReducer
    })

);

store.subscribe(()=>{

    const state=store.getState();

    const visibleExpenses= getVisibleExpensers(state.expenses,state.filters);
    console.log(visibleExpenses);//
});


const expendOne=store.dispatch(addExpense({description:'rent',amount:100,createdAt:-21000}));
const expendTwo =store.dispatch(addExpense({description:'coffe',amount:300,createdAt:-1000}));

/*
store.dispatch(removeExpense({id:expendOne.expense.id}));
store.dispatch(editExpense(expendTwo.expense.id,{amount:666}));
store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());*/

/*store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));*/
//store.dispatch(setStartDate(125));
//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

const demoState={
    expenses:[{
        id:'deydeyvyvf',
        description:'deescreition de ouf',
        note:'this was tghis future test ',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }
};

const user={
    name:'jen',
    age:24
};


/*console.log({
    ...user,
    location:"phila",
    age:30
})*/