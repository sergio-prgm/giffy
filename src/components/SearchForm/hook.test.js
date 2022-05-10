import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params));

test("should change keyword", () => {
  const { result } = setup();

  act(() => {
    result.current.updateKeyword("batman");
  });
  // act is a wrapper that ensures the operation is done how it would in a browser

  expect(result.current.keyword).toBe("batman");
});

test("should use initial value", () => {
  const { result } = setup({
    initialKeyword: "matrix",
  });

  expect(result.current.keyword).toBe("matrix");
});

test("should update times accordingly", () => {
  const { result } = setup({
    initialKeyword: "matrix",
  });

  act(() => {
    result.current.updateKeyword("b");
    result.current.updateKeyword("ba");
  });

  expect(result.current.keyword).toBe("ba");
  expect(result.current.times).toBe(2);
});

//try an empty string
