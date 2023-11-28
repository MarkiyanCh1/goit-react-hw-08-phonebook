import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ zIndex: "1000", position: "fixed", left: "45%", top: "44%" }}>
      <Circles
        height="160"
        width="160"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
