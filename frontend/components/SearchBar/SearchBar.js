import { Input } from 'antd'
const { Search } = Input
import styles from './search.module.css'

const SearchBar = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  return (
    <div className={styles.search}>
      <Search
        placeholder='Search course'
        allowClear
        size='large'
        onSearch={onSearch}
        shape='round'
        style={{
          width: 400,
        }}
      />
    </div>
  )
}

export default SearchBar
