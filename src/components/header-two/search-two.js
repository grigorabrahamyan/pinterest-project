import React, {useState, useEffect} from 'react';
import './search-two.css'
import {db} from '../login/firebase/func';

async function readTopicsData() {
    const data = db.collection('topics').get();
    return data;
}

function SearchBox({topics, changeTopicsBoxLogHeader}) {

    const[category, setCategory] = useState([]);

    function addCkeckBoxTopics() {
        changeTopicsBoxLogHeader();
    }

    // function removeCheckBoxTopics() {
    //     setTopics([]);
    // }

    useEffect(() => {
        const arr = [];
        readTopicsData().then(item => {
            item.forEach(doc => {
                arr.push({
                    name: doc.data().nameOfCategory,
                    id: doc.id
                })
            })
        })
        setCategory(arr);
    }, []);

    console.log(category);

    return (

        <>
            <div
                className = 'search input-one'
            >
                <input
                    className = 'input-first' 
                    type = 'search' 
                    autoComplete = 'on' 
                />
            </div>
            <div 
                className = 'search input-two'
            >
                <input
                    onFocus = {addCkeckBoxTopics}
                    // onBlur = {removeCheckBoxTopics}
                    className = 'input-second' 
                    type = 'search'
                />
                {
                    topics ?
                    <div className = 'check-topics' > 
                        {
                            category.map(item => {
                                return (<label className = 'chackbox-item' >
                                    <input type = 'checkbox' />
                                    {`${item.name}`}
                                </label>)
                            })
                        }
                    </div> : null
                }
            </div>
        </>
    );
};

export default SearchBox;