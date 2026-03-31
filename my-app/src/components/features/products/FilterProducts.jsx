import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React, { useState } from "react";

const FilterProducts = ({ onApplyFilter }) => {
  const [provider, setProvider] = useState("");
  const [price, setPrice] = useState("");
  const [quota, setQuota] = useState("");

  const handleSearchClick = () => {
    let minPrice = "",
      maxPrice = "";
    if (price && price !== "all") {
      const splitPrice = price.split("-");
      minPrice = splitPrice[0];
      maxPrice = splitPrice[1] || "";
    }

    let minQuota = "",
      maxQuota = "";
    if (quota && quota !== "all") {
      const splitQuota = quota.split("-");
      minQuota = splitQuota[0];
      maxQuota = splitQuota[1] || "";
    }

    onApplyFilter({
      provider: provider === "all" ? "" : provider,
      minPrice,
      maxPrice,
      minQuota,
      maxQuota,
    });
  };

  return (
    <FieldGroup className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <Field>
        <FieldLabel>Provider</FieldLabel>
        <Select value={provider} onValueChange={setProvider}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Provider</SelectItem>
            <SelectItem value="Telkomsel">Telkomsel</SelectItem>
            <SelectItem value="Indosat">Indosat</SelectItem>
            <SelectItem value="XL">XL</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel>Harga</FieldLabel>
        <Select value={price} onValueChange={setPrice}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Rentang Harga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Harga</SelectItem>
            <SelectItem value="0-20000">Di bawah Rp 20.000</SelectItem>
            <SelectItem value="20000-50000">Rp 20.000 - Rp 50.000</SelectItem>
            <SelectItem value="50000-100000">Rp 50.000 - Rp 100.000</SelectItem>
            <SelectItem value="100000-">Di atas Rp 100.000</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel>Kuota</FieldLabel>
        <Select value={quota} onValueChange={setQuota}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Rentang Kuota" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kuota</SelectItem>
            <SelectItem value="0-10">0 - 10 GB</SelectItem>
            <SelectItem value="10-30">10 - 30 GB</SelectItem>
            <SelectItem value="30-50">30 - 50 GB</SelectItem>
            <SelectItem value="50-">Di atas 50 GB</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field className="justify-end">
        <Button size="lg" onClick={handleSearchClick}>
          <Search className="mr-2" />
          Cari Paket
        </Button>
      </Field>
    </FieldGroup>
  );
};

export default FilterProducts;
