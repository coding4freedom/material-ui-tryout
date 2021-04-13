import Grid from '@material-ui/core/Grid';
import './App.css';

import Header from '../src/Components/Header';
import Cards from './Components/Cards';
import Footer from '../src/Components/Footer';

function App() {
  return (
    <div className="App">
      <Grid 
        container spacing={3}        
      >
        <Grid item xs={12}>
          <div style={{
            backgroundColor: 'red'
          }}>
            <Header />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Cards 
              img={'https://images.unsplash.com/photo-1569865223473-40b24125ed40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80'}
              name={'Bear'}
              descrip={'Equipped with large claws this monster can apply heavy damage'}
              passive={'Stacking Rage'}
              hidden={'Thick coat'}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Cards 
              img={'https://images.unsplash.com/photo-1548184062-8ec2ca93a26c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
              name={'Tiger'}
              descrip={'High mobility allows this monster to access vital points scoring quick kills to prey'}
              passive={'Adaptive Eye'}
              hidden={'Armor penetration'}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Cards 
              img={'https://images.unsplash.com/photo-1593544737805-4ec50543564b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80'}
              name={'Shark'}
              descrip={'Powerful jaws and crushing speed allow this monster to render prey immobile'}
              passive={'Teeth Regeneration'}
              hidden={'Blood in the Water'}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{
            backgroundColor: 'green'
          }}>
            <Footer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
