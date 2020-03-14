import React from 'react';
import Grid from '@material-ui/core/Grid';

const ArticleForm = () => {

    const [title, setTitle] = React.useState('');
  
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
      <Grid container direction="row">
        <Grid item xs={12} sm={6}>
        <input type="text" value={title} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <h2>{title}</h2>
        </Grid>
      </Grid>
    )
}

export default ArticleForm;