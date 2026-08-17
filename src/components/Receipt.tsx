import IconBarcode from '../../assets/images/icon-barcode.svg';

const Receipt = () => {
  return (
    <article
      className="p-300 mt-125 md:m-0 bg-neutral-50 rounded-20 flex flex-col gap-250 h-[420px] w-[327px] md:w-[340px] xl:w-[400px] transform-3d -rotate-z-2 md:-rotate-z-4
    shadow-[0_1px_1px_rgba(0,0,0,0.03),0_16px_30px_rgba(62,44,30,0.35),0_20px_40px_rgba(62,44,30,0.16)]"
    >
      <div className="flex justify-between text-preset-10 text-neutral-600 uppercase pb-150 border-b border-neutral-400 w-full border-dashed">
        <div>
          <p className="mb-050">Receipt</p>
          <h2 className="text-preset-4 text-neutral-900 normal-case">
            Your stay
          </h2>
        </div>
        <div className="text-right">
          <p className="mb-025">№ MS-2026</p>
          <p>0421-AH</p>
        </div>
      </div>

      <div className="flex justify-around text-center">
        <div>
          <p className="text-preset-10 text-neutral-600 uppercase">Check in</p>
          <p className="text-preset-2 text-neutral-900 mt-100 mb-075">25 Apr</p>
          <p className="text-preset-7 text-neutral-700">Saturday · 15:00</p>
        </div>
        <div>
          <p className="text-preset-10 text-neutral-600 uppercase">Check out</p>
          <p className="text-preset-2 text-neutral-900 mt-100 mb-075">29 Apr</p>
          <p className="text-preset-7 text-neutral-700">Wednesday · 11:00</p>
        </div>
      </div>

      <div className="flex flex-col gap-100 text-preset-5 text-neutral-900 pt-150 border-t border-neutral-400 w-full border-dashed">
        <p className="flex justify-between">
          Room · La Garrigue · 4 nights{' '}
          <span className="text-preset-9">€ 620.00</span>
        </p>
        <p className="flex justify-between">
          Breakfast · 2 guests <span className="text-preset-9">€ 96.00</span>
        </p>
        <p className="flex justify-between text-neutral-700">
          Tourist tax <span>€ 14.40</span>
        </p>
      </div>

      <div className="flex justify-between items-center pt-150 border-t border-neutral-600">
        <p className="text-preset-8 text-neutral-800 uppercase">Total paid </p>
        <p className="text-preset-3 text-neutral-900">€ 730.40</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-preset-10 text-neutral-600 uppercase">
          Paid · Wise · GBP
        </p>
        <img src={IconBarcode} alt="" height="28" />
      </div>
    </article>
  );
};

export default Receipt;
