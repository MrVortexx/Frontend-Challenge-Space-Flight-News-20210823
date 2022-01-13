import React, { useState, useEffect } from 'react';
import News from './News';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {NewsListStyles, NewsSearchForm} from './styles';
import { withStyles, styled } from '@material-ui/core/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import ArticleService from '../../services/ArticleService';


const LoadMoreBtn = styled(Button)({
  backgroundColor: 'var(--color-3)',
  borderColor: '#0063cc',
  color:  'var(--color-2)', 
  padding: '15px',
  margin: '100px 0',
  '&:hover': {
    backgroundColor: 'var(--color-2)',
    color:  'var(--color-3)', 
    boxShadow: 'none',
  },
});
const stylesInput = () =>({
  root: {
    '& label.Mui-focused': {
      color: 'var(--border-color-input);',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--border-color-input);',
    },
    '& .MuiInputLabel-root':{
      color: 'var(--border-color-input);',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--border-color-input);',
        color: 'var(--border-color-input);',
      }
    },
  },
});

const stylesSelect = () =>({
  root: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--border-color-input)"
      },
      '& label.Mui-focused': {
        color: 'var(--border-color-input);',
      },
      '& .MuiInputLabel-root':{
        color: 'var(--border-color-input);',
      },
      '& .MuiSvgIcon-root': {
        color:'var(--border-color-input);',
      },
      '& .MuiSvgIcon-root': {
        color:'var(--border-color-input);',
      }
  },
});

const SearchInput = withStyles(stylesInput)(TextField);
const SelectFormControlStyled = withStyles(stylesSelect)(FormControl);

function NewsList({searchParams}) {
    const [newsList, setNews] = useState([]);

    const [submit, setSubmit] = useState(0);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState(
        {
            _limit: 5,
            _start: 0,
            _sort: undefined,
            title_contains: undefined,
        }
    )
   
    const getArticles = () =>{
        setLoading(true);
        ArticleService.getNoticias(filters).then(response => {
            const {data} = response;
            if(filters._start){
                setNews([...newsList, ...data]);
            }else{
                setNews([...data]);
            }
        }).catch(error => {
            console.log(error);
        }).finally( () =>{
          setLoading(false);

        })
    }
    useEffect(() => {
        const cb = () => {
          const search = searchParams.get('search');
          if(search){
            setFilters({...filters, title_contains: search});
          }
          setSubmit(true);
        }
        cb();
    }, []);
   
    useEffect(() => {
      if(submit){
        getArticles();
        setSubmit(false);
      }
    }, [submit]);

    const handleChangeSearchInput = (e) => {
      setFilters({...filters, [e.target.name]: e.target.value});
    }
    const handleChangeSort = (e) => {
      setFilters({...filters, _sort: e.target.value,  _start: 0});
      setSubmit(true);
    }
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        setSubmit(true);
      }
    }
    
    const loadMore = () => {
      setFilters({...filters, _start: filters._start + filters._limit});
      setSubmit(true);
    }

    const isElementInverted = (index) => {
      return (index + 1)  % 2 === 0
    }
    return (
        <NewsListStyles>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
            <NewsSearchForm>
                <div>
                  <SearchInput id="outlined-basic" label="Busca" name='title_contains' onKeyPress={handleKeyPress}
                    variant="outlined"onChange={handleChangeSearchInput}
                      InputProps={{
                        style: {marginRight: '50px', color: 'var(--border-color-input)'},
                          endAdornment: (
                          <InputAdornment position="end" onClick={getArticles}>
                              <SearchIcon style={{color: 'var(--border-color-input)', borderColor: '#fff', cursor: 'pointer'}} />
                          </InputAdornment>
                          ),
                      }}
                      />                  
                </div>
                
                <div>
                <SelectFormControlStyled variant="outlined" style={{width: '150px'}} name="_sort"  >
                  <InputLabel id="select-label">Ordenação</InputLabel>

                  <Select
                    style={{color: 'var(--border-color-input)'}}
                    onChange={handleChangeSort}
                    label="Ordenação"
                    labelId="select-label"
                  
                  >
                    <MenuItem value="">
                      Nenhuma
                    </MenuItem>
                    <MenuItem value={"publishedAt:desc"}>Mais novos</MenuItem>
                    <MenuItem value={"publishedAt:asc"}>Mais antigos</MenuItem>
                  </Select>
                </SelectFormControlStyled>
                </div>
                
            </NewsSearchForm>
            <div>
            { 
                newsList.map((news, index) => (
                    <News data={news} key={news.id} isInverted={isElementInverted(index)}>
                    
                    </News>
                ))
            }
            </div>
           
            {
              newsList.length >=  filters._limit? (
                <LoadMoreBtn variant="contained" disableRipple onClick={loadMore}>Carregar mais</LoadMoreBtn>

              ):""
            }

        </NewsListStyles>
    )
}


export default NewsList;
