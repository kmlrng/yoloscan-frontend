import {BsPersonCircle} from 'react-icons/bs'
export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Our Team</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <i className={d.icon}></i>
                    </div>
                    <div className='testimonial-content'>
                    <div className='testimonial-meta'>  {d.name} </div>
                      <p>{d.text}</p>
                     
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
<div id='footer'>
<div className='container text-center'>
  <p>
    &copy; 2021 Object Detection System . Mini Project by {'group number 34 '}
    <a href='https://pdpu.ac.in/' rel='nofollow'>
      PDEU
    </a>
  </p>
</div>
</div>