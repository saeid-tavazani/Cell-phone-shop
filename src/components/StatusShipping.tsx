const StatusShipping = ({ status }: { status: number }) => {
  return (
    <div className="w-100 d-flex align-items-center gap-2 justify-content-around border border-2 rounded-3 p-4 mb-4">
      <i className="bi bi-basket text-warning fs-1"></i>
      <span className="w-25 bg-warning rounded-2" style={{ height: "3px" }} />
      <i className="bi bi-truck text-warning fs-1"></i>
      <span
        className={`w-25 rounded-2 ${status == 2 ? "bg-warning" : "bg-black"}`}
        style={{ height: "3px" }}
      />
      <i
        className={`bi bi-wallet fs-1 ${status == 2 ? "text-warning" : ""}`}
      ></i>
    </div>
  );
};

export default StatusShipping;
