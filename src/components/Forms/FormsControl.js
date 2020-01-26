import React from 'react';
import mod from './FormsControl.module.sass';

export const Input = () => {
  return(
      <div>
          <Input className={mod.contactsItem}/>
      </div>
  )
};

export const Textarea = () => {
    return(
        <div>
            <Textarea className={mod.contactsItemTextarea}/>
        </div>
    )
};