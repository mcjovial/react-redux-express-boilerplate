import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './projects.css';
import { getTestimonial } from '../../store/actions/testimonial';


function Testimonial() {
    const testimonial = useSelector(state => state.testimonial);
    const dispatch = useDispatch();
    console.log(testimonial);

    useEffect(() => {
        dispatch(getTestimonial());
    }, []);


    return (
        <div>
            <h2>Testimonial</h2>
            <ul>
                {testimonial.map(testimony =>
                    <li key={testimony.id}>{testimony.client} | {testimony.body}</li>
                )}
            </ul>
        </div>
    );
}

export default Testimonial;
