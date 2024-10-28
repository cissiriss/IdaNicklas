type StartFieldsetProps = {
  setIsComing: (value: boolean) => void;
};

export function StartFieldSet({ setIsComing }: StartFieldsetProps) {
  return (
    <fieldset>
      <label>
        Jag kommer på bröllopet
        <input
          onClick={() => setIsComing(true)}
          type="radio"
          name="osa-wedding"
          value="Självklart"
        />
        Självklart!
        <input
          type="radio"
          name="osa-wedding"
          value="Tyvärr"
          onClick={() => setIsComing(false)}
        />
        Tyvärr inte..
      </label>
    </fieldset>
  );
}
