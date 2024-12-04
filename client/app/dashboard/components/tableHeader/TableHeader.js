import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeXls } from "react-icons/bs";
const TableHeader = ({ title, link = "", click }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <div className="mt-3 me-3 d-flex justify-content-between">
      <div
        className={
          pathname === "/dashboard/sub-sub-categories" ||
          pathname === "/dashboard/purchases"
            ? `col-lg-4 ms-3 d-flex`
            : `col-lg-5 ms-3 d-flex`
        }
      >
        <Form.Control
          type="text"
          placeholder="search"
          className="form-control"
        />
        <Button type="submit" className="btn btn-primary btn-sm ms-3 rounded">
          Submit
        </Button>
      </div>
      <div
        className={
          pathname === "/dashboard/sub-sub-categories" ||
          pathname === "/dashboard/purchases"
            ? `col-lg-4`
            : `col-lg-2`
        }
      >
        {link.length > 0 ? (
          <div className="gap-1">
            {pathname === "/dashboard/purchases" && (
              <>
                <Button className="btn btn-primary text-white float-end ms-1">
                  <FaFilePdf />
                </Button>
                <Button className="btn btn-primary text-white float-end ms-1">
                  <BsFiletypeXls />
                </Button>
              </>
            )}
            <Link href={link} className="btn btn-primary text-white float-end">
              {title}
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={click}
              className="btn btn-primary text-white float-end"
            >
              {title}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TableHeader;
