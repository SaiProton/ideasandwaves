import { EntryContainer } from './ContactElements'

export const EntryBox = ({ name, label, rows }) => {
  return(
    <EntryContainer>
      <label htmlFor={ name }>{ label }</label>

      {rows === '1' ? 
        <input type='text' name={name}/> : 
        <textarea name={ name } rows={ rows }></textarea> 
      }
      
    </EntryContainer>
  )
}