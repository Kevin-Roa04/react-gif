import { useState } from 'react'

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [] );

    const onAddCategory = (newCategory) => {
        if ( categories.includes( newCategory) ) return;

        setCategories( [ newCategory, ...categories] );
        // setCategories( cat => [...cat, 'Valorant'] );
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                // setCategories = { setCategories }
                onNewCategory = { ( value ) => onAddCategory(value) } 
            />
            
            { categories.map( category => (
                    <GifGrid 
                        key={ category }  
                        category={ category }
                    />
                )) 
            }
            
                {/* Gif Item */}
                
        </>
    )
}