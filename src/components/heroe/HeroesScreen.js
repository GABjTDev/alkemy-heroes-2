import { Formik, Field, Form } from 'formik';

import useHeroes from '../../hooks/useHeroes';

import Spinner from '../ui/Spinner';
import ColHeroeCard from './ColHeroeCard';

import '../../styles/components/heroe/HeroesScreen.css';

const HeroesScreen = () => {

    const {loading, heroes, error, searchHeroe} = useHeroes();

    
    return (
        <div className="container">
            <div className="row place-content-center">
                {
                    loading ?
                        <Spinner />
                    :
                    <>
                        <Formik
                            initialValues={{
                                search: ''
                            }}
                            validate={values => {
                                const errors = {};

                                if (!values.search) {
                                  errors.search = 'Required';
                                }else if(!isNaN(values.search)){
                                    errors.search = 'Search is a number'
                                }

                                return errors;
                              }}
                            onSubmit={(values) => {
                                searchHeroe(values.search.toLowerCase());
                                values.search = ''
                            }}
                        >
                            {
                                ({ errors }) => (
                                        <Form className="form-search mb-4">
                                            <Field id="search" name="search" placeholder="Search" className={errors.search ? 'error-input' : ''} /> 
                                            <button type="submit"><i className="fas fa-search"></i></button>
                                        </Form>
                                    )
                            }

                        </Formik>
                        {
                            heroes.map(heroe => {
                                return <ColHeroeCard key={heroe.id} heroe={heroe} actionDelete={false}/>
                            })
                        }
                        {
                            error &&
                                <div className="alert alert-danger" role="alert">
                                    El heroe no existe
                                </div>
                        }
                    </>
                }
                
            </div>
        </div>
    )
}

export default HeroesScreen;
