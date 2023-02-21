import { ChangeEvent } from "react";
import styles from '@/styles/atoms/_searchbar.module.css'

interface Props {
    setSearchText: (a: string) => void;
  }

export const Searchbar = ({ setSearchText }: Props) => {  
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    };
  
    return (
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar}
          type="search"
          name="search-input"
          aria-label="search-input"
          disabled={false}
          onChange={onChangeHandler}
        />
      </div>
    );
  };
  