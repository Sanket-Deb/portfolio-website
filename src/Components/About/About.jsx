import React from 'react'
import Image from 'next/image';

const About = () => {
    const edu_img = '/images/icons8-resume-100.png';
    const exp_img = '/images/icons8-certificate-64.png';
  return (
    <div>
        <section>
            <h5>Introduction</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum purus ac nisi fermentum, et ullamcorper lectus condimentum. Donec viverra risus id est bibendum, et feugiat justo sollicitudin. Morbi ac lacus nec sapien hendrerit malesuada non vel lorem. In hac habitasse platea dictumst. Ut eleifend, erat vel varius pharetra, justo felis facilisis lorem, ac dapibus velit dui ac lacus. Proin a convallis eros. Nulla venenatis tincidunt libero, nec aliquam libero interdum a. Vestibulum et felis et nisi suscipit volutpat sit amet ac lorem. Aliquam consequat nibh vitae nisi tristique posuere. Donec tincidunt augue justo, nec ultrices nunc ullamcorper nec. Nulla vitae posuere ipsum. Mauris ut feugiat odio. In lacinia diam id gravida scelerisque. Donec gravida nisi euismod diam gravida posuere. Fusce malesuada risus id tortor tincidunt efficitur. Curabitur consectetur dapibus urna, ac consequat sapien porta et. Nulla in dolor ipsum. Cras sed dictum purus. Sed tempus efficitur gravida.

            Etiam convallis leo vel purus dictum, at cursus leo rutrum. Nullam vulputate urna eu eros varius tincidunt. Sed volutpat volutpat libero, nec vulputate turpis pharetra ut. Integer dictum magna a efficitur lobortis. Vestibulum ultrices eros non feugiat facilisis. Aliquam posuere libero in nunc cursus volutpat. Sed consequat, nisi a volutpat euismod, dolor nisi suscipit lacus, vel vulputate mi sapien sed orci. Morbi venenatis nec purus et vestibulum. Fusce nec elit nec velit venenatis dapibus non nec nisi. Nullam id suscipit nulla. Vestibulum volutpat auctor libero, vel ullamcorper tortor accumsan nec. Vivamus auctor sapien nec neque consectetur lacinia.

            Quisque euismod efficitur risus, ac tincidunt urna. Curabitur non nunc id mi facilisis finibus. Phasellus at auctor urna. Morbi ac convallis leo. Integer convallis libero nulla, non elementum turpis aliquam a. Suspendisse auctor, lorem ac efficitur convallis, leo libero ultrices elit, sed tincidunt elit augue a justo. Donec placerat auctor diam a molestie. Quisque interdum, nunc sit amet condimentum varius, mauris leo malesuada quam, vitae viverra dui est et nulla. Nam a facilisis nulla. Quisque a odio sed nisl ullamcorper venenatis. Pellentesque nec malesuada ex. Curabitur et metus vel sem elementum vehicula. Fusce condimentum velit ac dui hendrerit lobortis. In hac habitasse platea dictumst. Vivamus id diam sapien.

            Vivamus porttitor tempor risus, ut elementum odio ultrices eu. In mollis dui id sem egestas, nec volutpat est egestas. Pellentesque ac turpis vehicula, vulputate dolor ac, fermentum urna. Nulla facilisi. Etiam eu velit sed ligula varius ultricies. Phasellus eget posuere sem, a vestibulum felis. Nullam vitae ligula eget lectus tincidunt venenatis a vel nisi. Cras tincidunt suscipit neque, eget fermentum turpis. Etiam volutpat, justo sed finibus posuere, ligula leo laoreet nisi, et posuere nisi orci vel felis. Mauris at suscipit arcu. Etiam sagittis ante ac sapien tempor vehicula. Nam blandit, elit a interdum accumsan, ligula sem porta risus, in facilisis augue felis quis felis. Nam convallis tincidunt nulla, id blandit dolor. Cras vestibulum consequat dui, a rhoncus ligula.
            </p>
        </section>
        <section>
            <h5>Education</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Image src={edu_img} height={50} width={50} alt="EduPic" id="EduImg"  />
        </section>
        <section>
            <h5>Experience</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Image src={exp_img} height={50} width={50} alt="ExpPic" id="ExpImg"  />
        </section>
    </div>
  )
}

export default About