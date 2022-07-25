/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', className: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', className: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', className: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const onClick = () => {
    setOpen(!open)
  }
  return (
    <>
      {
        !open ? <div className="w-72">
          <div className='relative flex flex-col-reverse group'>
            <div className='flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900'>
              <a href="#">
                Basic Tee 6-Pack
              </a>
            </div>
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
              <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-preview.jpg"
                alt="Model wearing gray t-shirt."
                className="object-cover object-center" />
              <div className="flex items-end p-4">
                <button type="button" className="relative z-10 w-full px-4 py-2 text-sm text-gray-900 bg-white bg-opacity-75 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100"
                  onClick={onClick} >Quick View<span className="sr-only">, Basic Tee 6-Pack </span>
                </button>
              </div>
            </div>
          </div>
        </div>
          : <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-stretch justify-center min-h-full text-center md:items-center md:px-2 lg:px-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    enterTo="opacity-100 translate-y-0 md:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  >
                    <Dialog.Panel className="flex w-full text-base text-left transition transform md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                      <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden bg-white shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button
                          type="button"
                          className="absolute text-gray-400 top-4 right-4 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </button>

                        <div className="grid items-start w-full grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                          <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-2 aspect-h-3 sm:col-span-4 lg:col-span-5">
                            <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                          </div>
                          <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                            <section aria-labelledby="information-heading" className="mt-2">
                              <h3 id="information-heading" className="sr-only">
                                Product information
                              </h3>

                              <p className="text-2xl text-gray-900">{product.price}</p>

                              {/* Reviews */}
                              <div className="mt-6">
                                <h4 className="sr-only">Reviews</h4>
                                <div className="flex items-center">
                                  <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                      <StarIcon
                                        key={rating}
                                        className={classNames(
                                          product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                          'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                    ))}
                                  </div>
                                  <p className="sr-only">{product.rating} out of 5 stars</p>
                                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {product.reviewCount} reviews
                                  </a>
                                </div>
                              </div>
                            </section>

                            <section aria-labelledby="options-heading" className="mt-10">
                              <h3 id="options-heading" className="sr-only">
                                Product options
                              </h3>

                              <form>
                                {/* Colors */}
                                <div>
                                  <h4 className="text-sm font-medium text-gray-900">Color</h4>

                                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <span className="flex items-center space-x-3">
                                      {product.colors.map((color) => (
                                        <RadioGroup.Option
                                          key={color.name}
                                          value={color}
                                          className={({ active, checked }) =>
                                            classNames(
                                              color.selectedClass,
                                              active && checked ? 'ring ring-offset-1' : '',
                                              !active && checked ? 'ring-2' : '',
                                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                            )
                                          }
                                        >
                                          <RadioGroup.Label as="span" className="sr-only">
                                            {color.name}
                                          </RadioGroup.Label>
                                          <span
                                            aria-hidden="true"
                                            className={classNames(
                                              color.className,
                                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                            )}
                                          />
                                        </RadioGroup.Option>
                                      ))}
                                    </span>
                                  </RadioGroup>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                      Size guide
                                    </a>
                                  </div>

                                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4">
                                      {product.sizes.map((size) => (
                                        <RadioGroup.Option
                                          key={size.name}
                                          value={size}
                                          disabled={!size.inStock}
                                          className={({ active }) =>
                                            classNames(
                                              size.inStock
                                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                              active ? 'ring-2 ring-indigo-500' : '',
                                              'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                            )
                                          }
                                        >
                                          {({ active, checked }) => (
                                            <>
                                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                              {size.inStock ? (
                                                <span
                                                  className={classNames(
                                                    active ? 'border' : 'border-2',
                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                    'absolute -inset-px rounded-md pointer-events-none'
                                                  )}
                                                  aria-hidden="true"
                                                />
                                              ) : (
                                                <span
                                                  aria-hidden="true"
                                                  className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                                                >
                                                  <svg
                                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                    viewBox="0 0 100 100"
                                                    preserveAspectRatio="none"
                                                    stroke="currentColor"
                                                  >
                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                  </svg>
                                                </span>
                                              )}
                                            </>
                                          )}
                                        </RadioGroup.Option>
                                      ))}
                                    </div>
                                  </RadioGroup>
                                </div>

                                <button
                                  type="submit"
                                  className="flex items-center justify-center w-full px-8 py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Add to bag
                                </button>
                              </form>
                            </section>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
      }
    </>
  )
}
