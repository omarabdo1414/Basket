import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className="about-section">
        <div
          className="relative bg-cover bg-center h-[75vh] w-full flex items-center justify-center text-center"
          style={{ backgroundImage: 'url("/assets/About-image.png")' }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 text-white px-4">
            <h2 className="text-2xl font-bold mb-4">About for Bacola</h2>
            <p className="text-sm max-w-lg mx-auto uppercase text-gray-300">
              we can do more for you
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-10 px-2 ">
          <p className="text-sm text-gray-700 leading-relaxed">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12 px-4 ">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Quisque erat urna, congue et libero in <br />
            eleifend euismod velit.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>
      </section>
      {/*section 2 */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="/assets/about-people.jpg.png"
                alt="CEO" width={550} height={100}
                className="max-h-[600px] object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-800 mb-2">Rachel Leonard - Bacola CEO</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Duis convallis luctus pretium .   
                Pellentesque habitant morbi
              </h4>
              <p className="text-gray-600 leading-relaxed text-xs mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.
              </p>
              <p className="text-gray-600 leading-relaxed text-xs">
                In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
                dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
                at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
                bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
                dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
                eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
                dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
                libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
                fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                Curabitur fermentum dolor eu lacus consectetur varius.
              </p>
            </div>
          </div>
          <div className="
            relative 
            mt-[-4rem]
            md:mt-[-100px]
            md:w-[80%] 
            md:ml-32
          ">
            <p className="bg-white text-gray-600 text-xs px-6 py-5 rounded-sm w-full leading-relaxed shadow-lg">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. 
              Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. 
              Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. 
              Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, 
              pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-sm">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
              rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
              Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
