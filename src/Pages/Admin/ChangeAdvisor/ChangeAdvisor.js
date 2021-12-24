


<FormControl component="fieldset">
  <FormLabel component="legend">Advisor</FormLabel>
  <RadioGroup
    aria-label="Advisor"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>