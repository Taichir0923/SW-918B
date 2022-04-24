import React , {useState , useReducer} from "react";

export interface TestProps {
    user?: string;
    isPremium?: boolean;
    click?: () => void;
    jsxElement: JSX.Element;
    custom?: any
}

const Test:React.FunctionComponent<TestProps> = ({custom , user , isPremium , click , jsxElement}) => {
    return <div>
        <button onClick={click}></button>
        <div>
            {jsxElement}
        </div>
        <h1>{user}</h1>
    </div>
}

interface AnotherComponentProps extends TestProps {
    extra: string;
}

const AnotherComponent:React.FC<AnotherComponentProps> = ({}) => {
    return <Test user="{123}" jsxElement={<div>

    </div>} />
}
type ReducerObjectType = {
    loading: boolean,
    data: string[]
}
type ActionType = {
    type: string,
    payload: string[]
}
type ReducerType = (state: ReducerObjectType , action: ActionType) => ReducerObjectType;

const dummyReducer:ReducerType = (state: ReducerObjectType , action: ActionType) => {
    switch(action.type){
        default: return state
    }
}

const initialState:ReducerObjectType = {
    loading: false,
    data: ["bla"]
}

const Com:React.FC = () => {
    const [data , setData] = useState<boolean>(false);
    const [dummy , dispatchDummyAction] = useReducer(dummyReducer , initialState);
    return <AnotherComponent extra="blabla" jsxElement={<div>

    </div>} />
}

export default Test;