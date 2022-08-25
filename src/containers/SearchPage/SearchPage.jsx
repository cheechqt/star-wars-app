import { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { debounce } from "lodash";

import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async param => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        }
      })
      console.log(peopleList);
      setPeople(peopleList);
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResponse('')
  }, [])

  const debounceGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    []
  )

  const handleInputChange = (event) => {
    const value = event.target.value;

    console.log(value);
    setInputSearchValue(value);
    debounceGetResponse(value)
  }


  return (
    <>
      <h1 className='header__text'>Search</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Input character's name"
      />
      <SearchPageInfo people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);