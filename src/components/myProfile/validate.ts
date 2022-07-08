import { IUpdate } from "../../store/user/asyncActions";

export function validateForm(form: IUpdate) {
  if (!form._id || form._id.length < 1) {
    return false;
  }
  if (!form.username || form.username.length < 3) {
    return false;
  }
  if (!form.email || form.email.length < 6) {
    return false;
  }
  if (form.password) {
    if (!form.password || form.password.length < 4) {
      return false;
    }
  }
  return true;
}
