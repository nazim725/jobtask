import React, { memo } from 'react'
import './Inventory.css'

const Inventory = memo(() => {
  const data = [
    {
      dateUpdated: '11 Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'AllRight',
      Quantity: '200/300',
      unitPrice: 10,
      amount: 20000,
    },
    {
      dateUpdated: '10 Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'AllRight',
      Quantity: '122/300',
      unitPrice: 10,
      amount: 1220,
    },
    {
      dateUpdated: '9 Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'In Progress',
      Quantity: '140/300',
      unitPrice: 10,
      amount: 720,
    },
    {
      dateUpdated: '30 Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'In Progress',
      Quantity: '140/300',
      unitPrice: 10,
      amount: 720,
    },
    {
      dateUpdated: '12Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'Stock Out',
      Quantity: '34/300',
      unitPrice: 10,
      amount: 9020,
    },
    {
      dateUpdated: '12Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'Stock Out',
      Quantity: '34/300',
      unitPrice: 10,
      amount: 9020,
    },
    {
      dateUpdated: '4Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'Stock Out',
      Quantity: '34/300',
      unitPrice: 10,
      amount: 9020,
    },
    {
      dateUpdated: '22Nov 2021',
      title: 'Hammer',
      details: 'This is a hammer to do work with',
      status: 'Stock Out',
      Quantity: '34/300',
      unitPrice: 10,
      amount: 9020,
    },
  ]
  return (
    <div>
      <h4 className="title">Inventory</h4>
      <div className="inventory">
        <form>
          <input className="search-box" type="search" placeholder="Search" />
        </form>
        <div style={{ marginTop: '24px' }}>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr style={{ background: '#FDF4ED' }}>
                  <th scope="col" class="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date Updated <i class="fas fa-arrow-down"></i>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Title <i class="fas fa-arrows-alt-v"></i>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Details
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount <i class="fas fa-arrows-alt-v"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      {' '}
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">{dt.dateUpdated}</td>
                    <td className="px-6 py-4">{dt.title}</td>
                    <td className="px-6 py-4">{dt.details}</td>
                    <td className="px-6 py-4">{dt.status}</td>
                    <td className="px-6 py-4">{dt.Quantity}</td>
                    <td className="px-6 py-4">{dt.unitPrice}</td>
                    <td className="px-6 py-4">{dt.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className=" flex justify-between mt-4">
          <div class="select-box-1">
            <div class="mb-3">
              <select
                class="form-select appearance
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>10 Items per page</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="flex">
            {/* --- */}
            <div class="select-box-2">
              <div class="mb-3 ">
                <select
                  class="form-select appearance
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>Page 1 of 5</option>
                  <option value="1">Page 2 of 5</option>
                  <option value="2">Page 3 of 5</option>
                  <option value="3">Page 4 of 5</option>
                  <option value="3">Page 5 of 5</option>
                </select>
              </div>
            </div>
            {/* --- */}
            <div className="flex mt-1 mr-2 mb-7">
              <button className="pre-button font-bold"> &lt; </button>
              <button className="next-button font-bold">&gt; </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Inventory
