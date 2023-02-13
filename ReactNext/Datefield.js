<>
      <div key={fieldName} className="form-group">
        <label className="formlabel" htmlFor="date">
          Date
        </label>
        <Controller
          control={control}
          name="dateInput"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dropdownMode="select"
              showMonthDropdown
              showYearDropdown
              adjustDateOnChange
            />
          )}
        />
        {errors.dateInput && <span>This field is required</span>}
      </div>


<div>
              <label className="formlabel" >Data Field Form</label>
              <Controller
              name="dataFieldForm"
              setValue={menuitem.dataFieldForm}
              control={control}
              render={({field}) => <Select 
              {...field} 
              options={entryForms}
              //onChange={(value)=>{field.onChange(value); dataFieldChangeHandler(value);}}
              placeholder={"Select a data field form"}
              className="formcontrol"
              />}
              />
          </div>










          </>