import Button from "react-bootstrap/Button";
export default function FilterProduct() {
  const sort = [
    {
      id: 1,
      text: "جدیدترین",
    },
    { id: 2, text: "ارزان‌ترین" },
    {
      id: 3,
      text: "گران‌ترین",
    },
    {
      id: 4,
      text: "موجودی‌ها",
    },
  ];
  return (
    <section className="mt-4 d-flex flex-column">
      <h1 style={{ fontSize: "1.5rem" }}>لیست محصولات</h1>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <p className="d-flex align-items-center m-0">
            <i
              className="d-flex bi bi-funnel-fill"
              style={{ fontSize: "1.25rem" }}
            ></i>
            مرتب سازی براساس
          </p>
          {sort.map((item) => (
            <span key={item.id}>{item.text}</span>
          ))}
        </div>
        <Button variant="primary">مقایسه</Button>
      </div>
    </section>
  );
}
