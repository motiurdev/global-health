import React from 'react';
import testimonialImg from '../../../images/testimonail/1.jpeg'
import signImg from '../../../images/sign/sign-1.png'
import './Testimonial.css'
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="testimonail-title py-5">
                            <h1 className='section-title'>PATIENT TESTIMONIALS</h1>
                            <p className='text-secondary'>It’s always the word of mouth that’s the best advice.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <img src={testimonialImg} alt="" className='testimonial-img' />
                                        <h5 className='py-2'>PAULA SMITH</h5>
                                        <img src={signImg} alt="" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className='testimonial-quote text-secondary'>Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Quisque posuere rhoncus erat, sit amet aliquet augue.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="col-12 col-md-6">
                                    <img src={testimonialImg} alt="" className='testimonial-img' />
                                    <h5 className='py-2'>PAULA SMITH</h5>
                                    <img src={signImg} alt="" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className='testimonial-quote text-secondary'>Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Quisque posuere rhoncus erat, sit amet aliquet augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="testimonial-right pt-5 pb-4">
                            <h2 className='section-title'>PATIENT TESTIMONIALS</h2>
                            <p className='text-secondary'>It’s always the word of mouth that’s the best advice. Here are some of our…</p>
                        </div>
                        <p className='text-secondary'>Quisque posuere rhoncus erat, sit amet aliquet augue. Nunc eleifend ornare venenatis. Mauris quis arcu et sem suscipit sollicitudin at quis tellus. Ut maximus ex semper, ultricies lorem in, viverra nisl. Proin lorem quam, tincidunt at neque et, semper molestie urna. Sed vel scelerisque quam, id fringilla ante.</p>
                        <Link to="/appointment" className='testimonial-btn'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;